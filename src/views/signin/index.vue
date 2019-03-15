<template>
<mu-flex
  class="wrapper"
  justify-content="end"
  align-items="center">
  <mu-flex
    class="form-wrapper"
    wrap="wrap"
    justify-content="center">
    <mu-flex
      class="row-item logo"
      justify-content="center">
      vuecli-muse-admin-template
      <mu-menu class="languageMenu" open-on-hover>
        <mu-button icon class="icon">
          <mu-icon value="language"></mu-icon>
        </mu-button>
        <mu-list slot="content" @change="onChangeLanguage">
          <mu-list-item button value="zh-CN">
            <mu-list-item-action>
              <img :src="zhcnIcon" style="height: 24px;"/>
            </mu-list-item-action>
            <mu-list-item-title>简体中文</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button value="en-US">
            <mu-list-item-action>
              <img :src="enusIcon" style="height: 24px;"/>
            </mu-list-item-action>
            <mu-list-item-title>English</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-flex>
      <mu-form
        ref="signinForm"
        :model="signinForm"
        label-position="left"
        label-width="100">
        <mu-form-item
          prop="username"
          :label="$t('signinForm.usernameLabel')"
          :rules="usernameRules">
          <mu-icon slot="label" value="account_circle" />
          <mu-text-field
            v-model="signinForm.username"
            autocomplete="off">
          </mu-text-field>
        </mu-form-item>
        <mu-form-item
          prop="password"
          :label="$t('signinForm.passwordLabel')"
          :rules="passwordRules">
          <mu-icon slot="label" value="lock" />
          <mu-text-field
            v-model="signinForm.password"
            autocomplete="off"
            :action-icon="visibility ? 'visibility_off' : 'visibility'"
            :action-click="() => (visibility = !visibility)"
            :type="visibility ? 'text' : 'password'">
          </mu-text-field>
        </mu-form-item>
      </mu-form>
      <mu-flex
        class="row-item btn-group"
        justify-content="center">
        <mu-button color="primary" @click="onSubmit">{{ $t('signinForm.signinBtn') }}</mu-button>
        <mu-button @click="onReset">{{ $t('signinForm.resetBtn') }}</mu-button>
      </mu-flex>
      <mu-flex
        class="row-item tip"
        justify-content="center">
        <!-- You are being watched... -->
        愿我们在抵达路的末端时，都不会后悔。
      </mu-flex>
      <mu-flex
        class="row-item tip"
        justify-content="center">
        username: sAdmin, admin, manager, developer, client, user
      </mu-flex>
      <mu-flex
        class="row-item tip"
        justify-content="center">
        password: any
      </mu-flex>
  </mu-flex>
</mu-flex>
</template>

<script>
/* eslint-disable */
import enusIcon from '@a/icons/en-US.jpg';
import zhcnIcon from '@a/icons/zh-CN.jpg';
/* eslint-enable */

export default {
  name: 'signin',
  data() {
    return {
      enusIcon,
      zhcnIcon,
      visibility: false,
      signinForm: {
        username: '',
        password: '',
      },
      usernameRules: [
        { validate: val => !!val, message: this.$t('signinForm.usernameRequired') },
        { validate: val => val.length >= 3, message: this.$t('signinForm.usernameLongerThan3') },
      ],
      passwordRules: [
        { validate: val => !!val, message: this.$t('signinForm.passwordRequired') },
        { validate: val => val.length <= 16, message: this.$t('signinForm.passwordShorterThan16') },
      ],
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.signinForm.validate().then((result) => {
        if (result) {
          const loading = this.$loading({
            text: this.$t('request.loading'),
          });
          const data = {
            username: this.signinForm.username,
            password: this.signinForm.password,
          };
          this.$store.dispatch('auth/signin', data)
            .then((response) => {
              if (response.success) {
                // check query and jump
                this.$store.commit('auth/setToken', response.token);
                const { redirect } = this.$route.query;
                if (redirect) {
                  this.$router.replace({ path: redirect });
                } else {
                  this.$router.push({ path: '/dashboard' });
                }
              } else {
                this.$alert(
                  this.$t(`request.${response.message}`),
                  this.$t('message.alertTitle'),
                  {
                    okLabel: this.$t('message.okLabel'),
                    type: 'error',
                  },
                );
              }
              loading.close();
            });
        }
      });
    },
    onReset() {
      this.$refs.signinForm.clear();
      this.signinForm = {
        username: '',
        password: '',
      };
    },
    onChangeLanguage(val) {
      this.$store.commit('app/setLanguage', val);
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../mixins/colors';

.wrapper {
  padding: 24px;
  background-color: #2d3a4b;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url('../../assets/background/bg4.jpg');

  .form-wrapper {
    width: 350px;
    padding: 16px;
    background-color: @white;
    border-radius: 8px;

    &>.logo {
      position: relative;
      margin-bottom: 24px;
      font-size: 18px;

      &>.languageMenu {
        position: absolute;
        right: -12px;
        top: -12px;

        & .icon {
          border-radius: 8px;
        }
      }
    }

    &>.btn-group>.mu-button:first-child {
      margin-right: 8px;
    }

    &>.tip {
      margin-top: 10px;
      color: @grey;
      font-size: .7rem;
    }
  }
}

</style>

<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" autoComplete="false" placeholder="请输入密码" @keyup.13.native="handleLogin"></el-input>
            </el-form-item>

            <el-button type="primary" style="width: 100%; margin-bottom: 30px" @click.native.prevent="handleLogin" :loading="loading" >
                登录
            </el-button>
            <div class="tips">
              <span>用户名：admin</span>
              <span>密码：111111</span>
            </div>
            <div class="tips">
              <span>用户名：editor</span>
              <span>密码：111111</span>
            </div>
            <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
              第三方登录
            </el-button>
        </el-form>
        <el-dialog title="第三方登录" :visible.sync="showDialog" append-to-body>
          微信、QQ、微博
        </el-dialog>
    </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };

    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码至少 6 位"));
      } else {
        callback();
      }
    };
    return {
      showDialog: false,
      loading: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword
          }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      // 表单整体验证
      this.$refs.loginForm.validate(valid => {
        //   返回一个 Boolean
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          alert("login success!");
        } else {
          alert("error submit!");
          return false;
        }
      });
    }
  }
};
</script>

<!-- scoped 作用于当前组件 -->
<!-- 使用 scoped 后 vue 会在组件标签内增加属性data-v- 如 data-v-f6ee8876 绑定作用域-->
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>


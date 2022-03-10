<template>
  <div id="app">
    <!-- <el-button type="primary" size="mini">
      primary
    </el-button>
    <el-button type="success" loading size="small">
      success
    </el-button>
    <el-button :disabled="disabled" type="danger" size="medium">
      danger
    </el-button>
    <el-button type="info" round>
      info
    </el-button>
    <el-button :disabled="disabled" type="warning">
      warning
    </el-button>
    <el-button type="" icon="el-icon-edit" :loading="isLoading" @click.native="changeStatus"> -->
    <!-- 父组件想在子组件上监听自己的click的话，需要加上native修饰符 -->
    <!-- </el-button>
    <el-button type="primary" icon="el-icon-delete" plain>
      icon-delete
    </el-button>
    <hr>
    <p>按钮组</p> 
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group> -->

    <!-- <el-button-group> -->
    <!-- <el-button type="primary" circle icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" circle icon="el-icon-delete"></el-button>   -->
    <!-- </el-button-group> -->

    <!-- <hr>
    动态标签type 

    <form action="#" method="get">
      <el-button-group>
        <el-button type="primary" native-type="submit" >
          提交
        </el-button>
        <el-button type="danger" native-type="reset" @click="doSubmit" >
          重置
        </el-button>
      </el-button-group>
    </form> -->

    <!-- 使用 element-ui -->
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu>
          <el-menu class="el-menu-vertical-demo">
            <el-menu-item index="1">活动发布</el-menu-item>
            <el-menu-item index="2">活动管理</el-menu-item>
          </el-menu>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step" finish-status="success">
            <el-step title="活动信息"></el-step>
            <el-step title="报名签到"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>
          </el-steps>

          <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.cate" size="large"></el-input>
              </el-form-item>
              <el-form-item label="" prop="cate" required>
                <el-row style="height: 35px" type="flex" align="middle">
                  <el-col :span="3" style="width: 90px;">
                    <div class="el-form-item__label" style="padding-bottom: 0px">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="text" @click.prevent="dialogFormCategoriesVisiable=true">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.cate">
                  <el-radio v-for="item of ruleForm.categories" :key="item.name" :label="item.name">
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动标签" required>
                <el-tag v-for="tag of ruleForm.tags" type="primary" :key="tag" closable @close="handleClose(index)">
                  {{tag.name}}
                </el-tag>
                <el-button type="default" size="large" @click.prevent="dialogFormTagVisiable=true">
                  <i class="el-icon-plus"></i>
                </el-button>
              </el-form-item>
              <el-form-item label="活动时间" required style="width: 750px;">
                <el-col :span="5">
                  <el-form-item prop="activeStartTimeDate">
                    <el-date-picker v-model="ruleForm.activeStartTimeDate" type="date" placeholder="活动开始日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item prop="activeStartTimeTime">
                    <el-time-select placeholder="请选择时间点" v-model="ruleForm.activeStartTimeTime" :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                    </el-time-select>
                  </el-form-item>
                </el-col>
                <el-col :span="1" style="text-align: center;">—</el-col>
                <el-col :span="5">
                  <el-form-item prop="activeEndTimeDate">
                    <el-date-picker v-model="ruleForm.activeEndTimeDate" type="date" placeholder="活动结束日期">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item prop="activeEndTimeTime">
                    <el-time-select placeholder="请选择时间点" v-model="ruleForm.activeEndTimeTime" :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                    </el-time-select>
                  </el-form-item>
                </el-col>
			        </el-form-item>
              <el-form-item label="活动地点" required>
                <address-select :province="ruleForm.province" :city="ruleForm.city" :detail="ruleForm.detail" :isAddressTrue="isAddressTrue">
                </address-select>
              </el-form-item>
              <el-form-item label="活动封面">
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item label="设置报名表">
                
              </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormCategoriesVisiable">
              <el-form>
                <el-form-item>
                  <el-tag v-for="(cate, index) of ruleForm.categories" type="primary" :key="cate.name" closable @close="handleClose(index)">
                    {{cate.name}}
                  </el-tag>
                  <el-form-item label="活动名称">
                    <el-input v-model="dialogFormCate.name" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormCategoriesVisiable = false">取 消</el-button>
                <el-button type="primary" @click.native="handleAdd(dialogFormCate.name,ruleForm.categories)">确 定</el-button>
              </div>
            </el-dialog>
            <el-dialog title="添加活动标签" :visible.sync="dialogFormTagVisiable">
              <el-form>
                <el-form-item>
                  <el-form-item>
                    <el-input v-model="dialogTagName" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormTagVisiable = false">取 消</el-button>
                <el-button type="primary" @click.native="handleAdd(dialogTagName,ruleForm.tags)">添 加</el-button>
              </div>
            </el-dialog>

          </div>

          <!-- 按钮组 -->
          <el-button-group>
            <el-button type="primary" :disabled="preStep" @click.native.prevent="handlePreStep" icon="el-icon-arrow-left">上一步</el-button>
            <el-button type="primary" :disabled="nextStep" @click.native.prevent="handleNextStep">下一步
              <i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
            <el-button type="primary" icon="el-icon-upload2">发布活动</el-button>
          </el-button-group>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import ElButton from "@/components/ElButton";
// import ElButtonGroup from "@/components/ElButtonGroup";

import Address from "@/components/Address";

  const date = 'Mon Oct 17 2016 00:00:00 GMT+0800 (中国标准时间)'

export default {
  name: "App",
  components: {
    // "el-button": ElButton,
    // "el-button-group": ElButtonGroup
    "address-select": Address,
  },
  data() {
    return {
      // disabled: false,
      // isLoading: false,
      step: 1,
      preStep: true,
      nextStep: false,
      dialogFormCategoriesVisiable: false,
      dialogFormTagVisiable: false,
      isAddressTrue:false,
      dialogFormCate: {
        name: ""
      },
      dialogTagName: "",
      ruleForm: {
        name: "",
        categories: [
          {
            name: "未发布"
          },
          {
            name: "测试活动"
          },
          {
            name: "精彩活动"
          }
        ],
        cate: "测试活动",
        tags: [],
        activeStartTimeDate: date,
        activeStartTimeTime: "00:45",
        activeEndTimeDate: date,
        activeEndTimeTime: "00:45",
        province: "广东省",
        city: "广州市",
        detail: "番禺区广州大学城超谷科技园"
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
  },
  methods: {
    //   changeStatus() {
    //     this.isLoading = true;
    //   },

    //   doSubmit(event) {
    //     console.log(event)
    //   }
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handlePreStep() {
      this.step--;
      this.goStep(this.step);
    },
    handleNextStep() {
      this.step++;
      this.goStep(this.step);
    },
    goStep(n) {
      switch (n) {
        case 1:
          this.preStep = true;
          this.nextStep = false;
          break;
        case 2:
        case 3:
          this.preStep = false;
          this.nextStep = false;
          break;
        case 4:
          this.preStep = false;
          this.nextStep = true;
          break;
      }
    },
    handleClose(tag) {
      //   this.dialogFormCategoriesVisiable = false
      console.log(tag);

      this.ruleForm.categories.splice(tag, 1);
    },
    handleAdd: function(tag, tags) {
      if (tag && tag.trim().length !== 0) {
        var isExist = false;
        tag = tag.trim();
        for (var i = 0; i < tags.length; i++) {
          if (tags[i].name == tag) {
            isExist = true;
            break;
          }
        }
        if (isExist) {
          this.$message({
            message: "该标签已存在",
            type: "warning"
          });
        } else {
          this.dialogFormTagVisiable = false;
          this.dialogFormCategoriesVisiable = false;
          tags.push({
            name: tag
          });
        }
      } else {
        this.$message({
          message: "标签不能为空",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}

header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5 ease;
  border-top: 4px solid #3091f2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

header.el-menu-demo {
  padding-left: 300px !important;
}

main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
  margin-top: 60px;
}

main .main-left {
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}

main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}

main .el-menu {
  background-color: transparent !important;
}

/* 时间选择器 */

.step1 .el-date-editor {
  width: 150px;
}

.step1 .el-form-item .router-link {
  color: #fff;
}

.el-form-item__error {
  white-space: nowrap;
}
</style>

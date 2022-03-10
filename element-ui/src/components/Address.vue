<template>
    <div id="app">
        <el-form :model="form" class="demo-ruleForm" :rules="rules" ref="form" label-position="top">
            <el-row :gutter="20" class="address">
                <el-col :span="5">
                    <el-form-item prop="province">
                        <el-select v-model="form.province" placeholder="请输入省份" @change="provChange">
                            <el-option v-for="item in provinces" :key="item.value" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item  prop="city">
                        <el-select v-model="form.city" placeholder="请输入市" @change="cityChange" >
                            <el-option
                            v-for="item in citys"
                            :key="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import addressData from "../assets/js/addressData.js";

function formatData(data) {
  var result = [];
  for (var key in data) {
    result.push({
      value: key
    });
  }
  return result;
}

export default {
  name: "Address",
  props: ["province", "city", "detail", "isAddressTrue"],
  data() {
    return {
      provinces: formatData(addressData),
      rules: {
        province: [{ required: true, message: "请选择省份", trigger: "change" }],
        city: [{ required: true, message: "请选择城市", trigger: "change" }],
        detail: [{ required: true, message: "请填写详细地址", trigger: "change" }]
      },
      form: {
        province: this.province,
        city: this.city,
        detail: this.detail
      }
    };
  },
  computed: {
        citys: function (){
            return formatData(addressData[this.form.province])
        },
  },
  methods: {
    provChange: function(val, oldVal) {
      if (oldVal) {
        this.form.city = "";
        this.form.detail = "";
      }
      var data = formatData(addressData[this.form.province]);
      for (var i = 0; i < data.length; i++) {
        this.$set(this.citys, i, data[i]);
      }
    },
    cityChange: function(val, oldVal) {
      if (oldVal) {
        this.form.detail = "";
      }
    }
  }
};
</script>
<style>
</style>



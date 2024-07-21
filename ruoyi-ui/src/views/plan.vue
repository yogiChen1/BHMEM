
<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="所属年级" prop="planGrade">
        <el-input
          v-model="queryParams.planGrade"
          placeholder="请输入所属年级"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="计划名称" prop="planName">
        <el-input
          v-model="queryParams.planName"
          placeholder="请输入课程名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:plan:add']"

        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:plan:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:plan:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:plan:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="planList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="计划id" align="center" prop="planId" />
      <el-table-column label="计划名称" align="center" prop="planName" />
      <el-table-column label="年级" align="center" prop="planGrade" />
      <el-table-column label="计划说明" align="center" prop="remark" />
      <el-table-column label="累计应修学分" align="center" prop="scoreAll" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:plan:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleDetail(scope.row)"
            v-hasPermi="false"
          >详情</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:plan:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改【请填写功能名称】对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">

        <el-form-item label="计划名称" prop="planName">
          <el-input v-model="form.planName" placeholder="请输入所属年级" />
        </el-form-item>
        <el-form-item label="所属年级" prop="planGrade">
          <el-input v-model="form.planGrade" placeholder="请输入课程名称" />
        </el-form-item>
        <el-form-item label="计划说明" prop="remark">
          <el-input v-model="form.remark" :min-height="192"/>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
<!--    计划详情-->

<!--    抽屉样式-->
<!--    <el-drawer-->
<!--      title="计划详情"-->
<!--      :visible.sync="detailOpen"-->
<!--      :direction="rtl"-->
<!--      >-->
<!--      <span>我来啦!</span>-->
<!--    </el-drawer>-->
<!--    弹窗样式-->
    <el-dialog title="计划详情" :visible.sync="detailOpen"  fullscreen="true" append-to-body>
      <el-descriptions class="margin-top" :title="rowDetail.planName" :column="3" :size="size" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            计划ID
          </template>
          {{ rowDetail.planId }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            计划名称
          </template>
          {{ rowDetail.planName }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            所属年级
          </template>
          {{ rowDetail.planGrade }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            计划说明
          </template>
          <el-tag size="small">{{ rowDetail.remark }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <el-row style="margin-top:20px; margin-bottom:20px">
        <el-button type="primary" @click="submitForm">添加课程</el-button>
      </el-row>
        <el-table :data="planCourseList" border style="width: 100%">
          <el-table-column fixed prop="courseId" label="课程id" width="120">
          </el-table-column>
          <el-table-column prop="courseName" label="一级课程名称" width="150">
          </el-table-column>
          <el-table-column prop="courseCategory" label="二级课程名称" width="150">
          </el-table-column>
          <el-table-column prop="courseContent" label="课程内容" width="280">
          </el-table-column>

          <el-table-column prop="necessary" label="必修/选修" width="120">
          </el-table-column>
          <el-table-column prop="requireTimes" label="需完成次数" width="120">
          </el-table-column>
          <el-table-column prop="scoreType" label="学分规则" width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-popconfirm
                title="是否确认将该课程从计划中删除？"
                @confirm=""
              >
                <el-button type="text" slot="reference">删除</el-button>
              </el-popconfirm>
            </template>
<!--            <template slot-scope="scope">-->
<!--              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>-->
<!--            </template>-->
          </el-table-column>
        </el-table>


<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button type="primary" @click="submitForm">确 定</el-button>-->
<!--        <el-button @click="cancel">取 消</el-button>-->
<!--      </div>-->
    </el-dialog>



  </div>
</template>

<script>
import { listPlan, getPlan, delPlan, addPlan, updatePlan } from "@/api/system/plan";
import plan_list from '@/mock/plan_list'
import plan_course_list from '@/mock/plan_course_list'



export default {
  name: "Plan",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 【请填写功能名称】表格数据
      planList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 详情页弹出
      detailOpen:false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        planGrade: null,
        planName: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      //当前计划数据
      rowDetail:{

      },
      //当前计划课程列表
      planCourseList:[]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询【请填写功能名称】列表 */
    getList() {
      this.loading = true;
      this.planList = plan_list.rows;
      this.total = plan_list.total;
      this.loading = false;

      // listPlan(this.queryParams).then(response => {
      //   this.planList = response.rows;
      //   this.total = response.total;
      //   this.loading = false;
      // });
    },
    getPlanCourseList(){
      this.planCourseList = plan_course_list.rows
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.detailOpen = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        planId: null,
        grade: null,
        planName: null,
        scoreAll: null,
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.planId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加综合实践计划";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const planId = row.planId || this.ids
      getPlan(planId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改综合实践计划";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.planId != null) {
            updatePlan(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addPlan(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const planIds = row.planId || this.ids;
      this.$modal.confirm('是否确认删除综合实践计划，编号为"' + planIds + '"的数据项？').then(function() {
        return delPlan(planIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/plan/export', {
        ...this.queryParams
      }, `plan_${new Date().getTime()}.xlsx`)
    },
    /** 计划详情 **/
    handleDetail(row) {
      this.reset();
      this.detailOpen = true;
      this.rowDetail = row;
      this.getPlanCourseList();
      // getPlan(planId).then(response => {
      //   this.courseList = response.data;
      //
      // });
    },
    handlePlanCourseDelete(row) {
      const courseId = row.courseId;
      this.$modal.confirm('是否确认将课程从综合实践计划中删除？').then(function() {
        // return delPlan(planIds);
        return;
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
  }
};
</script>

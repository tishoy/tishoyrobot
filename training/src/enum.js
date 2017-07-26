/**
 * APP类型
 */
export default APP_TYPE_COMPANY = 1;                //公司
export default APP_TYPE_ORANIZATION = 2;            //培训机构
/**
 * 数据类型枚举
 */
export default DATA_TYPE_ALL = "all";               // 全部数据
export default DATA_TYPE_STUDENT = "student";       // 学生数据
export default DATA_TYPE_CLAZZ = "clazz";           // 班级数据
export default DATA_TYPE_BASE = "base";             // 基础数据
export default DATA_TYPE_FINANCE = "finance";       // 财政数据
export default DATA_TYPE_EXPRESS = "express";       // 邮寄数据
export default DATA_TYPE_ADMIN = "admin";           // 管理员数据

/**
 * 状态枚举
 */
export default STATUS_ENROLLED = "enrolled";        //报名
export default STATUS_ARRANGED = "arranged";
export default STATUS_AGREED = "agreed";
export default STATUS_EXAMING = "examing";
export default STATUS_PASSED = "passed";
/**
 * 状态参数
 */
export default STATUS_RETRY_TIMES = "retry_times";      //重考次数
export default STATUS_EXAM_RESULT_SCORE = "score";           //考试成绩

/**
 * 报名状态枚举
 */
export default STATUS_ENROLLED_UNDO = 0;              //未报名
export default STATUS_ENROLLED_DID = 1;                //已经报名
export default STATUS_ENROLLED_REDO = 2;                //重报名

/**
 * 课程安排状态枚举
 */
export default STATUS_ARRANGED_UNDO = 0;              //未安排
export default STATUS_ARRANGED_DOING = 1;                //已安排
export default STATUS_ARRANGED_DID = 2;                //已回访 电话询问能否上课

/**
 * 电话回访结果
 */
export default STATUS_AGREED_UNDO = 0;
export default STATUS_AGREED_AGREE = 1;
export default STATUS_AGREED_REFUSED = 2;

/**
 * 考试安排枚举
 */
export default STATUS_EXAMING_CANTDO = 0;               //培训未结束 不能参加考试
export default STATUS_EXAMING_UNDO = 1;                 //培训结束 未安排考试
export default STATUS_EXAMING_DOING = 2;                //已经安排考试
export default STATUS_EXAMING_DID = 3;                  //考试已结束

/**
 * 考试结果枚举
 */
export default STATUS_PASSED_UNDO = 0;                  //考试未通过
export default STATUS_PASSED_DID = 1;                   //考试通过
export default STATUS_PASSED_REDO = 2;                  //等待重新考试
export default STATUS_PASSED_CANTDO = 3;                //补考失败  重安排上课

/**
 * 路由枚举
 */
export default LOGIN = "login";
export default REGISTER_COMPANY = "register";
export default CHECK_AVAILABLE = "available";
export default RESET_INFO = "reset";
export default INSERT_STUDENT = "insert";
export default REMOVE_STUDENT = "remove";
export default BASE_INFO = "base";
export default SELF_INFO = "self";
export default ADDEXP = "addexp";
export default DELEXP = "delexp";

export default ARRANGE_EXAM = "examing";
export default PASS_EXAM = "pass";
export default RETRY_EXAM = "retry";
export default GIVE_SCORE = "score";
export default OVER = "over";

export default ENROLL_STUDENT = "enroll";
export default AGREE_ARRANGE = "agree";
export default REFUSE_ARRANGE = "refuse";

export default NEW_CLASS = "new";
export default ENTRANCE_CLASS = "entrance";
export default EXIT_CLASS = "exit";

export default QUERY = "query";
/*
 Navicat Premium Data Transfer

 Source Server         : project
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : jeecg-boot

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 24/03/2024 13:35:57
*/

-- ----------------------------
-- Table structure for personnel_person
-- ----------------------------
DROP TABLE IF EXISTS `personnel_person`;
CREATE TABLE `personnel_person`  (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `person_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '人员ID',
  `person_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '名字',
  `gender` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '性别',
  `birthday` date NOT NULL COMMENT '出生日期',
  `region` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '地区',
  `depart_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属部门名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personnel_person
-- ----------------------------
INSERT INTO `personnel_person` VALUES ('1770811914509365250', '111', '张三', '1', '2024-03-01', '120101', '1754448076963090454');

DROP TABLE IF EXISTS `personnel_department`;
CREATE TABLE `personnel_department`  (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pid` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '父级节点',
  `has_child` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否有子节点',
  `parent_depart_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '父级部门名称',
  `depart_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '当前部门名称',
  `depart_info` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '当前部门职能描述',
  `depart_in_time` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '部门上班时间',
  `depart_out_time` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '部门下班时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personnel_department
-- ----------------------------
INSERT INTO `personnel_department` VALUES ('1754448076963090436', NULL, NULL, NULL, '财务部', '负责管理公司财政', '09:00:00', '18:00:00');
INSERT INTO `personnel_department` VALUES ('1754448076963090440', NULL, NULL, NULL, '人力资源部', '负责公司员工管理', '09:00:00', '18:00:00');
INSERT INTO `personnel_department` VALUES ('1754448076963090445', NULL, NULL, '研发中心', '工程部', '负责硬件开发', '10:00:00', '19:00:00');
INSERT INTO `personnel_department` VALUES ('1754448076963090450', NULL, NULL, '研发中心', '研发部', '负责软件开发', '10:00:00', '19:00:00');
INSERT INTO `personnel_department` VALUES ('1754448076963090454', NULL, NULL, NULL, '研发中心', '产品开发总部', '10:00:00', '19:00:00');
INSERT INTO `personnel_department` VALUES ('1754448076963090459', NULL, NULL, '销售中心', '售后技术部', '负责产品售后', '09:00:00', '18:00:00');
INSERT INTO `personnel_department` VALUES ('1754448076963090464', NULL, NULL, '销售中心', '产品销售部', '负责产品推销', '09:00:00', '18:00:00');
INSERT INTO `personnel_department` VALUES ('1754448076963090468', NULL, NULL, NULL, '销售中心', '销售部门总部', '09:00:00', '18:00:00');
INSERT INTO `personnel_department` VALUES ('1770811401176887297', '0', '0', NULL, '111', '222', '00:00:05', '12:06:00');

DROP TABLE IF EXISTS `personnel_image`;
CREATE TABLE `personnel_image`  (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `person_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '人员姓名',
  `person_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '人员ID',
  `imgbase64` longblob NOT NULL COMMENT '人脸照片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personnel_image
-- ----------------------------
INSERT INTO `personnel_image` VALUES ('1771051665510391810', '张三', '111', 0x5151CDBCC6AC32303233303631303134353332385F313731313038363539353333382E6A7067);

SET FOREIGN_KEY_CHECKS = 1;


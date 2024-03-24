/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : jeecg-boot

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 24/03/2024 12:43:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for attendance_information
-- ----------------------------
DROP TABLE IF EXISTS `attendance_information`;
CREATE TABLE `attendance_information`  (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '姓名',
  `employee_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '员工ID',
  `check_in_time` datetime(0) NOT NULL COMMENT '打卡时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of attendance_information
-- ----------------------------
INSERT INTO `attendance_information` VALUES ('1763405288150401025', '黎泉林', '123131233', '2024-03-01 03:05:05');
INSERT INTO `attendance_information` VALUES ('1763567572579573761', '张飞', 'asda1121', '2024-03-16 22:10:45');
INSERT INTO `attendance_information` VALUES ('1771175797915148290', '将ajsda', '12313213', '2024-03-14 22:06:09');
INSERT INTO `attendance_information` VALUES ('1771175797915148291', '将a22jsda', '123132213', '2024-03-14 22:06:09');

SET FOREIGN_KEY_CHECKS = 1;

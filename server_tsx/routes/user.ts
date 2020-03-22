const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../controllers/isAuthenticated");
const Obj = require("../controllers/user");
const resetPass = require("../controllers/resetPassword");

router.route("/api/v1.0/resetPassword").post(resetPass.resetPassword);
router.route("/api/v1.0/confirmPassword/:id").get(resetPass.confirmPassword);
router.route("/api/v1.0/confirmRefresh").post(resetPass.confirmRefresh);
router.route("/api/v1.0/changeMail").patch(isAuthenticated, Obj.changeEmailFun);
router.route("/api/v1.0/user/logOut").post(Obj.logOutFun);
router
  .route("/api/v1.0/user/setPhoto")
  .post(
    isAuthenticated,
    Obj.uploadUserPhotoFun,
    Obj.resizeUserPhotoFun,
    Obj.updateUserFun
  );
router
  .route("/api/v1.0/user/:query")
  .get(Obj.getUserInfoFun)
  .post(Obj.UserFun)
  .patch(isAuthenticated, Obj.updateUserFun);

module.exports = router;

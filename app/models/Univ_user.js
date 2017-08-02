module.exports = (sequelize, DataTypes) => {
  const Univ_user = sequelize.define('univ_user',{
    user_id: DataTypes.BIGINT(20),
    cam_id: DataTypes.BIGINT(20),
    email: DataTypes.STRING(100),
    login_pass: DataTypes.STRING(255),
    join_type: DataTypes.STRING(2),
    oauth_code: DataTypes.STRING(100),
    oauth_name: DataTypes.STRING(100),
    oauth_gender: DataTypes.STRING(1),
    status: DataTypes.STRING(20),
    user_level: DataTypes.INTEGER,
    auth_key: DataTypes.STRING(128),
    auth_expire: DataTypes.DATE,
    reg_date: DataTypes.DATE,
    department_edit_date: DataTypes.DATE,
    entrance_year: DataTypes.DATE,
    department_id: DataTypes.STRING(4),
    nickname: DataTypes.STRING(50),
    blue_coin: DataTypes.INTEGER,
    red_coin: DataTypes.INTEGER,
    level: DataTypes.ENUM('준회원','정회원'),
    sns_share_count: DataTypes.INTEGER,
    platform: DataTypes.ENUM('ios','android'),
    device_token: DataTypes.STRING(255)
  })
  return Univ_user;
}

/*
module.exports = (sequelize, DataTypes) => {
  const Univ_user = sequelize.define('univ_user',{
    univ_user:{
      user_id: DataTypes.BIGINT(20),
      cam_id: DataTypes.BIGINT(20),
      email: DataTypes.STRING(100),
      login_pass: DataTypes.STRING(255),
      join_type: DataTypes.STRING(2),
      oauth_code: DataTypes.STRING(100),
      oauth_name: DataTypes.STRING(100),
      oauth_gender: DataTypes.STRING(1),
      status: DataTypes.STRING(20),
      user_level: DataTypes.INTEGER,
      auth_key: DataTypes.STRING(128),
      auth_expire: DataTypes.DATE,
      reg_date: DataTypes.DATE,
      department_edit_date: DataTypes.DATE,
      entrance_year: DataTypes.DATE,
      department_id: DataTypes.STRING(4),
      nickname: DataTypes.STRING(50),
      blue_coin: DataTypes.INTEGER,
      red_coin: DataTypes.INTEGER,
      level: DataTypes.ENUM('준회원','정회원'),
      sns_share_count: DataTypes.INTEGER,
      platform: DataTypes.ENUM('ios','android'),
      device_token: DataTypes.STRING(255)
    }
  })
  return Univ_user;
}


*/

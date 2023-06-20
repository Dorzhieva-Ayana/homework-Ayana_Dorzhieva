let userName = prompt (`Как тебя зовут?`, `admin/user`);
let password = prompt (`Введите пароль`, ` `);

if (userName == `admin` && password == `root` || userName == `user` && password == 123) {
  alert  (`You are welcome`);
} else {
  alert  (`Error: user is not found. Try again.`);
};

let usersPasswords = {
  admin: `root`,
  user: 123
  };
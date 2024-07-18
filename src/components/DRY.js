const FormInput = ({ type, name, value, onChange }) => (
  <input type={type} name={name} value={value} onChange={onChange} />
);

const LoginForm = ({ values, onChange }) => (
  <form>
    <FormInput
      type="text"
      name="username"
      value={values.username}
      onChange={onChange}
    />
    <FormInput
      type="password"
      name="password"
      value={values.password}
      onChange={onChange}
    />
    <button type="submit">Login</button>
  </form>
);

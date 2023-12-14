type User = {
  name: string;
  email: string;
};

type UserFormProps = {
  onSubmit: (user: User) => void;
};

type UserTableProps = {
  list: User[];
};

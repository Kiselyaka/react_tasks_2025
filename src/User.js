import React from 'react';
import UserField from './UserField';

function User({ id, name, email, changeField }) {
  return (
    <tr>
      <UserField id={id} text={name} type="name" changeField={changeField} />
      <UserField id={id} text={email} type="email" changeField={changeField} />
    </tr>
  );
}

export default User;
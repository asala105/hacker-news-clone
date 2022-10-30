import React from 'react';

export default function LoginPage() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Login</th>
        </tr>
        <tr>
          <th>username:</th>
          <td>
            <input type='text' />
          </td>
        </tr>
        <tr>
          <th>password:</th>
          <td>
            <input type='password' />
          </td>
        </tr>
        <tr><td><button disabled="disabled">Login</button></td></tr>
        <tr><td>Forgot Your Password?</td></tr>
        <tr>
          <th>Create Account</th>
        </tr>
        <tr>
          <th>username:</th>
          <td>
            <input type='text' />
          </td>
        </tr>
        <tr>
          <th>password:</th>
          <td>
            <input type='password' />
          </td>
        </tr>
        <tr><td><button disabled="disabled">Create Account</button></td></tr>
      </tbody>
    </table>
  );
}

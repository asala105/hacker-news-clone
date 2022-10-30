import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchUserDetails } from '../API/API';
import { UnixTimeToDate } from '../Utils';
import { useSearchParams } from 'react-router-dom';
import parse from 'html-react-parser';

export default function UserDetails() {
  const [userDetails, setUserDetails] = useState();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const userId = searchParams.get('id');
      const user = await fetchUserDetails(userId);

      setUserDetails(user.data);
    };
    fetchData();
  }, []);
  return (
    <table>
      <tbody>
        <tr>
          <th>user:</th>
          <td>{userDetails?.id}</td>
        </tr>
        <tr>
          <th>created:</th>
          <td>{UnixTimeToDate(userDetails?.created)}</td>
        </tr>
        <tr>
          <th>karma:</th>
          <td>{userDetails?.karma}</td>
        </tr>
        <tr>
          <th>about:</th>
          <td> {parse(userDetails?.about ? userDetails.about : '')}</td>
        </tr>
      </tbody>
    </table>
  );
}

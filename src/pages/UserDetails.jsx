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
        <tr className='article-number'>
          <th>user:</th>
          <td>{userDetails?.id}</td>
        </tr>
        <tr className='article-number'>
          <th>created:</th>
          <td style={{ color: "#000000" }}>{UnixTimeToDate(userDetails?.created)}</td>
        </tr>
        <tr className='article-number'>
          <th>karma:</th>
          <td>{userDetails?.karma}</td>
        </tr>
        <tr className='article-number'>
          <th>about:</th>
          <td> {parse(userDetails?.about ? userDetails.about : '')}</td>
        </tr>
      </tbody>
    </table>
  );
}

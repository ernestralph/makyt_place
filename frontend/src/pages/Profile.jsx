import React, { useState } from 'react'
import { Header, ProfileSidebar, ProfileContent } from "../components";
import styles from '../styles/styles'

const Profile = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[335px]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>

        <ProfileContent active={active} />
      </div>
    </>
  );
}

export default Profile

import ProfileBox from '../../components/ProfileBox/ProfileBox.jsx';
import profile from '../../components/ProfileBox/profile.json';

export default function Profile() {
  return (
    <>
      <ul>
        {profile.map((info, i) => {
          return (
            <li key={i}>
              {' '}
              <ProfileBox {...info} />{' '}
            </li>
          );
        })}
      </ul>
    </>
  );
}

const UserCard = ({ user }) => {
  return (
    <div>
      <article  className="flex flex-col justify-center items-center">
        <picture>
          <img src={user.picture.large} alt="" />
        </picture>
        <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
      </article>
    </div>
  )
}
export default UserCard
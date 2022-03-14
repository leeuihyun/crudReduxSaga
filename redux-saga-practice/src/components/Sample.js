const Sample = ({ loadingPost, loadingUsers, post, users }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && "포스트 로딩중 . . ."}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr />
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && "사용자 목록 로딩중 . . ."}
                {loadingUsers && users && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.name} : {user.email}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Sample;

const Book = (props) => {
    const {img, title, author , bookLink , authorLink, children, number}= props;
    return(
    <article className='book'>
        <a href={bookLink}>
            <img src={img} alt={title}/>
        </a>
        <a href={bookLink}>
            <h2>{title}</h2>
        </a>
        <p>
            {children}
        </p>
        <a href={authorLink}>
            <h4>{author}</h4>
        </a>
        <span className="number">{`#${number+1}`}</span>
    </article>
    );
}
export default Book;
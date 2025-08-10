type ItemProps = {
  img: string;
  name: string;
  link?: string;
};

function Item({ img, name,link }: ItemProps) {
  return (
    <div className='item'>
      <img src={img} alt={name} className='proj' />
      <a href={link}>{name}</a>
    </div>
  );
}

export default Item;

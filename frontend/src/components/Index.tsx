import indexStyle from "./Index.module.css";
export const Index = () => {
  return (
    <div className={indexStyle.wrapper}>
      <figure className={indexStyle.figure_img}>
        <img className={indexStyle.img} src="/fredrik_nilsen.jpeg" />
      </figure>
    </div>
  );
};

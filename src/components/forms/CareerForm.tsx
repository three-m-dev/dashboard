type Props = {
  mode: "view" | "create" | "edit";
};

const CareerForm = (props: Props) => {
  let jobExist = false;

  if (jobExist) {

  }

  switch (props.mode) {
    case "view":
      

      return <div>view</div>;
    case "create":
      return <div>create</div>;
    case "edit":
      return <div>edit</div>;
    default:
      return <div>Not Found</div>;
  }
};

export default CareerForm;

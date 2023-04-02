import { FC, SetStateAction, useState } from "react";
import { Card, Sidebar } from "../../components";
import picture from "../../assets/images/biology.jpg";
import { StyledSettings } from ".";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { theme } from "../../utils";

const Settings: FC = () => {
  const [open, setOpen] = useState(false);
  const [textValue, setValue] = useState("");
  const [name, setName] = useState("BIO-1001");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setName(textValue);
    setOpen(true);
    setValue("");
  };

  return (
    <StyledSettings>
      <div className="container">
        <Sidebar />
        <div className="content">
          <ArrowLeftCircleIcon
            style={{
              width: "75px",
              height: "75px",
              color: theme.color.purple[500],
            }}
          />
          <Card
            name={name}
            img={picture}
            desc="Biology Basics"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis arcu nec felis dictum aliquet. Ut sollicitudin eu ipsum eget tincidunt. Aenean dignissim fringilla euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sed urna dictum nibh egestas faucibus."
          />
          <ArrowRightCircleIcon
            style={{
              width: "75px",
              height: "75px",
              color: theme.color.purple[500],
            }}
          />
        </div>
      </div>
      <hr />
      <div className="action">
        <h3>Change class name</h3>
        <input type="text" name="name" onChange={handleChange}></input>
        <button onClick={() => handleClick()}>Change</button>
      </div>
    </StyledSettings>
  );
};

export default Settings;

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

export default function Header() {
  const [prefUserDark, setPrefUserDark] = useState(true)

  function handleClickDarkMode() {
    setPrefUserDark((prevMode) => {
        const newMode = !prevMode;
        console.log (
            newMode ? "User Swtichted from lightmode to darkmode" : "User swtiched from darkmode to lightmode" 
        )
        return newMode
    })
  }

  return (
    <div className="flex flex-row justify-between">
      <div>
        {prefUserDark && (
          <button className="border border-border p-2" onClick={handleClickDarkMode}>
            <LightModeIcon />
          </button>
        )}
        {!prefUserDark && (
          <button className="border border-border p-2" onClick={handleClickDarkMode}>
            <DarkModeIcon />
          </button>
        )}
      </div>
      <p className="text-red-900">This is an example header</p>
    </div>
  );
}

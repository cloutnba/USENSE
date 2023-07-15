import './Form.scss';
import {useState} from "react";
import {
    containsOnlyLetters,
    containsOnlyNumbers,
    containsOnlySymbols,
    validatePasswordMedium, validatePasswordStrong
} from "../utils/passValidation";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const Form = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [indicator, setIndicator] = useState("empty");
    const handlePassValue = (e) => {
        setPassword(e.trim());
        handleStrength(e.trim());
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleStrength = (password) => {
        if (password.length === 0){
            setStrength(0);
            setIndicator("empty");
        }
        if (password.length > 0 && password.length < 8){
            setStrength(-1);
            setIndicator("not valid");
        }
        if (password.length > 8 && (containsOnlyLetters(password) || containsOnlySymbols(password) || containsOnlyNumbers(password))){
            setStrength(1)
            setIndicator("easy");
        }
        if (password.length > 8 && validatePasswordMedium(password)){
            setStrength(2);
            setIndicator("medium");
        }
        if (password.length > 8 && validatePasswordStrong(password)){
            setStrength(3);
            setIndicator("strong");
        }
    };

    return (
        <>
            <form className="form" data-strength = {strength}>
                <h3 className="form__title">Enter password</h3>
                <label className="form__label">
                    <TextField
                        className="form__input"
                        placeholder="Enter password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => handlePassValue(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={toggleShowPassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className="form__pass-strength-wrapper">
                        <span className="form__section-pass-strength" data-strength = {strength}></span>
                        <span className="form__section-pass-strength" data-strength = {strength}></span>
                        <span className="form__section-pass-strength" data-strength = {strength}></span>
                    </div>
                    <h3 className="form__pass-indicator">Your password is <span className="form__pass-indicator--colored" data-strength = {strength}>{indicator}</span></h3>
                </label>
            </form>
        </>
    )
}

export default Form;
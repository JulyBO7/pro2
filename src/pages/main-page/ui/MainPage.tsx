import { FC } from "react";
import { useTranslation } from "react-i18next";

type MainPageProps = {

}
export const MainPage:FC<MainPageProps> = () => {
    const [t] = useTranslation();

    // useEffect(() => {
    //     const canvas: HTMLCanvasElement | null = document.getElementById("canvas");
    //     if (canvas) {
    //         const ctx = canvas.getContext("2d");
    //         if (ctx) {
    //             ctx.beginPath();
    //             const x = 25; // x coordinate
    //             const y = 25; // y coordinate
    //             const radius = 20; // Arc radius
    //             const startAngle = 0; // Starting point on circle
    //             const endAngle = Math.PI + (Math.PI * 1) / 2; // End point on circle
    //             const counterclockwise = true; // clockwise or counterclockwise

    //             ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    //             ctx.stroke();
    // ctx.fillRect(10, 10, 50, 50);
    // ctx.fillStyle = "rgb(200 0 0)";

    // ctx.clearRect(20, 20, 30, 30);
    // ctx.strokeRect(30, 30, 10, 10);
    // ctx.strokeStyle = "red";

    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(50, 25);
    // ctx.lineTo(25, 105);
    // ctx.lineTo(25, 25);

    // ctx.stroke();
    //         }
    //     }
    // }, []);
    return (
        <div>{t("mainPage")}</div>
        // <canvas id="canvas" style={{ border: "2px solid green" }}>
        //     <p>canvas-unsupported code</p>
        // </canvas>
    );
};

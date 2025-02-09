import { Suspense } from "react";
import { useTheme } from "app/providers/theme-context";
import { classNames } from "shared/lib/classNames";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar/ui/Sidebar";
// import { Modal } from "shared/components/modal/ui/Modal";
import { AppRouter } from "./providers/routes/ui/AppRoute";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [`${theme}`])}>
            <Suspense fallback="">
                <Navbar />
                <div className="appContent">
                    <Sidebar />
                    <AppRouter />

                </div>
            </Suspense>
            {/* {true && (
                <Modal>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, libero nostrum cum voluptas eum ducimus, praesentium labore ratione culpa repellat facere, amet rem harum delectus beatae neque perspiciatis architecto a?
                    </p>
                </Modal>
            )} */}
        </div>
    );
};

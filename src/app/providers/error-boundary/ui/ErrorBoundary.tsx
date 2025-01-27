import React from "react";
import { PageError } from "@/widgets/page-error";

type ErrorBoundaryProps = {
    children: React.ReactNode
}
type ErrorBoundaryState = {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState > {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any) {
        console.log(error);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
        // You can render any custom fallback UI
            return <PageError />;
        }
        return children;
    }
}

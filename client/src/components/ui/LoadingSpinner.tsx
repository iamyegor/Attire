import { Oval, OvalProps } from "react-loader-spinner";

export default function LoadingSpinner(props: Partial<OvalProps>) {
    return (
        <div data-testid="Spinner">
            <Oval
                visible={true}
                color="#808080"
                strokeWidth={4}
                secondaryColor="#D3D3D3"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                {...props}
            />
        </div>
    );
}

import ButtonPrimary from "../ButtonPrimary";

type Props = {
    messege: string;
    onDialogClose: Function;
}

export default function DialogInfo({ messege, onDialogClose }: Props) {

    return (
        <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{messege}</h2>
                <div className="dsc-dialog-btn-container" onClick={() => onDialogClose()}>
                    <ButtonPrimary text="ok" />
                </div>

            </div>
        </div>
    )
}
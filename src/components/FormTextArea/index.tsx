export default function FormTextArea(props: any) {

    const { validation, 
        invalid = "false", 
        dirty = "false", 
        onTurnDirty, 
        ...textareaProps 
    } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }
    
    return (
        <textarea 
        { ...textareaProps} 
        onBlur={handleBlur}
        data-onInvalid={invalid}
        data-dirty={dirty} />
    );
};
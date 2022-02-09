import { useForm } from "@on-deque/context-form";
import { useSteps } from "@on-deque/context-steps";
import { Button } from "@on-deque/ui-button";
import { FormField } from "@on-deque/ui-form-field";
import { Step } from "@on-deque/ui-step";

export const StepOne = () => {
  const [{ errors, fields }, dispatch] = useForm();
  const [_, dispatchStep] = useSteps();
  console.log("ERRORS: ", errors);
  console.log("FIELDS: ", fields);
  return (
    <Step>
      <FormField
        autoFocus={true}
        label="Link url"
        labelType="floating"
        name="url"
        onChange={dispatch.setInput("url")}
        onError={() => dispatch.setInputError("url")}
        placeholder="https://testing-library.com/docs/"
        required={true}
        type="url"
        value={fields["url"] as string}
      />
      <FormField
        label="Description"
        labelType="floating"
        name="description"
        onChange={dispatch.setInput("description")}
        placeholder="Description of the saved link"
        required={false}
        value={fields["description"] as string}
      />
      <FormField
        label="Tags"
        labelType="floating"
        name="tags"
        onChange={dispatch.setInput("tags")}
        placeholder="Separate, Each, Tag, With, A, Comma"
        required={false}
        value={fields["tags"] as string}
      />
      <Button disabled={!!errors} onClick={dispatchStep.nextStep}>
        {"Continue ->"}
      </Button>
    </Step>
  );
};

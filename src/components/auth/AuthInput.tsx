interface AuthInputProps {
  label: string;
  value: any;
  required: boolean;
  notRenderWhen?: boolean;
  type: "text" | "password" | "email";
  updateValue: (newValue: any) => void;
}
export default function AuthInput(props: AuthInputProps) {
  return props.notRenderWhen ? null : (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        required={props.required}
        value={props.value}
        onChange={(e) => props.updateValue?.(e.target.value)}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:outline-none border focus:border-blue-500 focus:bg-white
        `}
      />
    </div>
  );
}

import '../globals.css'

type RegistrationTextProps = {
    name: string;
    value: string;
    onChange: (val: string) => void;
    type?: string;
};

const RegistrationText = ({ name, value, onChange, type = "text" }: RegistrationTextProps) => {
    return (
      <div className="flex items-center justify-center">
        <input
          type={type}
          placeholder={name}
          className="required px-3 py-2 w-64 my-3 border rounded focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };

export default RegistrationText
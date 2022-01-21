import Resource from "@atoms/Resource/Resource";

type ResoucesBarProps = {
  resources: Array<any>;
};

export default function ResourcesBar({ resources }: ResoucesBarProps) {
  return (
    <ul className="my-10 space-y-4">
      {resources.map((resource) => (
        <li key={resource.name}>
          <Resource resource={resource} />
        </li>
      ))}
    </ul>
  );
}

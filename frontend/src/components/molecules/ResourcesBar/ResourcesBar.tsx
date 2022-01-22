import React from "react";
import Resource from "@atoms/Resource/Resource";
import { SearchContext } from "@context/SearchProvider/SearchProvider";

type ResoucesBarProps = {
  resources: Array<any>;
};

export default function ResourcesBar({ resources }: ResoucesBarProps) {
  const { searchContent } = React.useContext(SearchContext);

  return (
    <ul className="my-10 space-y-4">
      {resources ? (
        resources
          .filter((resource) =>
            resource.name
              ? resource.name.includes(searchContent)
              : resource.firstName.includes(searchContent)
          )
          .map((resource) => (
            <li key={resource.id}>
              <Resource resource={resource} />
            </li>
          ))
      ) : (
        <p className="text-center">Brak Zasobów</p>
      )}
    </ul>
  );
}

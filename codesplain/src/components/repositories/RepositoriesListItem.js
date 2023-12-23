import { Link } from "react-router-dom";
import FileIcon from "../tree/FileIcon";
import RepositoriesSummary from "./RepositoriesSummary";
import { MarkGithubIcon } from "@primer/octicons-react";

function RepositoriesListItem({ repository }) {
  const { full_name, language, description, owner, name, html_url } =
    repository;

  return (
    <div className="flex py-3 border-b">
      <FileIcon name={language} className="w-6 pt-1 shrink" />
      <div>
        <Link to={`/repositories/${full_name}`} className="text-xl">
          {owner.login}/<span className="font-bold">{name}</span>
        </Link>
        <p className="py-1 italic text-gray-500">{description}</p>
        <RepositoriesSummary repository={repository} />
      </div>
      <div className="flex items-center justify-end pr-2 grow">
        <a
          href={html_url}
          alt={html_url}
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <MarkGithubIcon />
        </a>
      </div>
    </div>
  );
}

export default RepositoriesListItem;

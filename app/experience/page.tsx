"use client";

import useDictionary from "../hooks/useDictionary";

export default function Experience() {
  const { dictionary, language } = useDictionary();

  return (
    <div className="flex flex-col gap-3 pb-5">
      <a>
        <span>
          {dictionary.Ph81}
        </span>
      </a>
      <a>
        <span>
          {dictionary.Ph82}
        </span>
      </a>
      <a>
        <span>
          {dictionary.Ph83}
        </span>
      </a>
      <a>
        <span>
          {dictionary.Ph84}
        </span>
      </a>
      <a>
        <span>
          {dictionary.Ph85}
        </span>
      </a>
      <a>
        <span>
          {dictionary.Ph86}
        </span>
      </a>
    </div>
  );
}

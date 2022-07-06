import "./App.css";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { createEditor, Editor, Transforms } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import ContentBox from "./components/ContentBox";
import { UserCircleIcon } from "@heroicons/react/solid";
import A4View from "./components/A4View";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

function App() {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [editor] = useState(() => withReact(createEditor()));
  const [state, setState] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    wantedTitle: "",
    description: "",
  });
  const [blocks, setBlocks] = useState([]);
  const { name, surname, email, phone, wantedTitle, description } = state;
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <ChakraProvider>
      <div className="w-full flex flex-col md:flex-row ">
        <main className="h-screen overflow-y-scroll py-10 space-y-4 max-w-7xl md:w-1/2 px-4 md:px-6 lg:px-10">
          <h1 className="text-2xl font-bold">Personal Details</h1>

          <div className="grid grid-cols-2 gap-2">
            <FormControl>
              <FormLabel htmlFor="wantedTitle">Wanted Job Title</FormLabel>
              <Input name="wantedTitle" type="text" onChange={handleChange} />
            </FormControl>

            <div className="flex items-end">
              <div className="flex items-center jus  space-x-2 w-full  rounded-md border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center self-end bg-indigo-100">
                  <UserCircleIcon className="h-6 w-6 text-indigo-700" />
                </div>
                <p>Upload Photo</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <FormControl>
              <FormLabel htmlFor="name">First Name</FormLabel>
              <Input name="name" type="text" onChange={handleChange} />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="surname">Last Name</FormLabel>
              <Input
                name="surname"
                id="surname"
                type="surname"
                onChange={handleChange}
              />
            </FormControl>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input name="email" type="email" onChange={handleChange} />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input name="phone" type="phone" onChange={handleChange} />
            </FormControl>
          </div>

          <button
            className=""
            onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
          >
            Show
          </button>
          {showAdditionalInfo ? <>Selam</> : null}

          <div className="grid grid-cols-1 gap-2">
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                name="description"
                htmlFor="description"
                onChange={handleChange}
              />
            </FormControl>
          </div>

          <div className="">
            <ContentBox
              title="Employment"
              desc="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
              contentTitle="employment"
              blocks={blocks}
              setBlocks={setBlocks}
            />
          </div>
          <div className="">
            <ContentBox
              title="Education"
              desc="A varied education on your resume sums up the value that your learnings and background will bring to job."
              contentTitle="education"
              blocks={blocks}
              setBlocks={setBlocks}
            />
          </div>
          <div className="">
            <ContentBox
              title="Skills"
              desc="Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system."
              contentTitle="skills"
            />
          </div>
          <div className="">
            <ContentBox
              title="Web sites & Social Links"
              desc="Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system."
              contentTitle="web sites & Social Links"
            />
          </div>
        </main>

        <aside className="font-serif flex items-center justify-center py-10 max-w-7xl md:w-1/2 px-4 md:px-6 lg:px-10 bg-gray-400">
          <A4View
            name={name}
            surname={surname}
            email={email}
            phone={phone}
            wantedTitle={wantedTitle}
            description={description}
            blocks={blocks}
          />
        </aside>
      </div>
    </ChakraProvider>
  );
} // employment, educatiom, skills, experience, languages, projects, certificates, others

export default App;

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import axios from 'axios';

function Options() {
  const [startButton, setStartButton] = useState(['Play']);
  const [category, setCategory] = useState('Any');
  const [difficulty, setDifficulty] = useState('Any');
  const [type, setType] = useState('Any');

  const [categoryDropdown, setCategoryDropdown] = useState([]);
  const difficultyDropdown = ['Easy', 'Medium', 'Hard'];
  const typeDropdown = ['Multiple Choice', 'True/False'];

  const handleStartClick = () => {
    setStartButton(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://opentdb.com/api_category.php',
    })
      .then((results) => {
        setCategoryDropdown(results.data.trivia_categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryDropdown]);

  if (!categoryDropdown.length) {
    return (
      <div className="placeholder-wave window d-flex rounded-4 mt-3 ps-5 h-50 justify-content-center align-items-center"></div>
    );
  }

  return (
    <div className="window d-flex rounded-4 mt-3 ps-5 h-50 justify-content-center align-items-center">
      <div className="col-6 flex-column">
        <div>
          <div>Category</div>
          <DropdownButton title={category}>
            {categoryDropdown.map((category) => {
              return (
                <Dropdown.Item
                  key={category.id}
                  onClick={() => {
                    setCategory(category.name);
                  }}
                >
                  {category.name}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>

        <div>
          <div>Difficulty</div>
          <DropdownButton title={difficulty}>
            {difficultyDropdown.map((difficulty, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onClick={() => {
                    setDifficulty(difficulty);
                  }}
                >
                  {difficulty}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>

        <div>
          <div>Type</div>
          <DropdownButton title={type}>
            {typeDropdown.map((type, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onClick={() => {
                    setType(type);
                  }}
                >
                  {type}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>
      </div>

      <div className="col-6">
        <Button className="w-25" onClick={handleStartClick}>
          {startButton}
        </Button>
      </div>
    </div>
  );
}

export default Options;
=======
import React, { useEffect, useState } from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import axios from 'axios';

function Options({ getParams }) {
  const [startButton, setStartButton] = useState(['Play']);
  const [category, setCategory] = useState({ id: '', name: 'Any' });
  const [difficulty, setDifficulty] = useState({ id: '', name: 'Any' });
  const [type, setType] = useState({ id: '', name: 'Any' });

  const [categoryDropdown, setCategoryDropdown] = useState([]);
  const difficultyDropdown = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];
  const typeDropdown = [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True/False' },
  ];

  const handleStartClick = () => {
    getParams({ category, difficulty, type });

    setStartButton(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://opentdb.com/api_category.php',
    })
      .then((results) => {
        setCategoryDropdown(results.data.trivia_categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryDropdown.length]);

  if (!categoryDropdown.length) {
    return (
      <div className="placeholder-wave window d-flex rounded-4 mt-3 ps-5 h-50 justify-content-center align-items-center"></div>
    );
  }

  return (
    <div className="window d-flex rounded-4 mt-3 ps-5 h-50 justify-content-center align-items-center">
      <div className="col-6 flex-column">
        <div>
          <div>Category</div>
          <DropdownButton title={category.name}>
            {categoryDropdown.map((category) => {
              return (
                <Dropdown.Item
                  key={category.id}
                  onClick={() => {
                    setCategory(category);
                  }}
                >
                  {category.name}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>

        <div>
          <div>Difficulty</div>
          <DropdownButton title={difficulty.name}>
            {difficultyDropdown.map((difficulty) => {
              return (
                <Dropdown.Item
                  key={difficulty.id}
                  onClick={() => {
                    setDifficulty(difficulty);
                  }}
                >
                  {difficulty.name}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>

        <div>
          <div>Type</div>
          <DropdownButton title={type.name}>
            {typeDropdown.map((type) => {
              return (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => {
                    setType(type);
                  }}
                >
                  {type.name}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>
      </div>

      <div className="col-6">
        <Button className="w-25" onClick={handleStartClick}>
          {startButton}
        </Button>
      </div>
    </div>
  );
}

export default Options;
>>>>>>> c0f34ad (upload commit)

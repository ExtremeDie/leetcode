#!/bin/bash

# Check if a folder name was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <folder-name>"
  exit 1
fi

# Define the path to the main directory
main_directory="algorithms"

# Define the new folder name from the first argument
new_folder="$1"

# Extract the prefix (e.g., "1") from the folder name
prefix=$(echo "$new_folder" | awk '{print $1}' | tr -d '.')

# Create the main directory if it doesn't exist
if [ ! -d "$main_directory" ]; then
  mkdir "$main_directory"
fi

# Create the new folder inside the main directory
new_folder_path="$main_directory/$new_folder"
if [ ! -d "$new_folder_path" ]; then
  mkdir "$new_folder_path"
  echo "Folder '$new_folder' created successfully inside '$main_directory'."
else
  echo "Folder '$new_folder' already exists inside '$main_directory'."
fi

# Create the 1.js and 1.md files inside the new folder
js_file="$new_folder_path/$prefix.js"
md_file="$new_folder_path/$prefix.md"

if [ ! -f "$js_file" ]; then
  touch "$js_file"
  echo "File '$prefix.js' created successfully inside '$new_folder_path'."
else
  echo "File '$prefix.js' already exists inside '$new_folder_path'."
fi

if [ ! -f "$md_file" ]; then
  touch "$md_file"
  echo "File '$prefix.md' created successfully inside '$new_folder_path'."
else
  echo "File '$prefix.md' already exists inside '$new_folder_path'."
fi
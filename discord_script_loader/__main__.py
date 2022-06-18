import os, requests, shutil

def main():
    # get discord main directory
    discord_main_dir = input("Enter the discord main directory (With update.exe in it): ")

    # get version of discord
    discord_version = get_version(discord_main_dir)

    print(f"Current Discord Version: {discord_version}")

    custom_scrips_folder_location = f"{discord_main_dir}/custom-scripts/".replace("\\", "/")
    os.mkdir(custom_scrips_folder_location)

    print("Getting custom-loader.js from github...")
    with open("custom_script_loader.js", "w") as f:
        f.write(get_custom_script_loader().replace("\n", ""))
        
    discord_deep_dir = f"{discord_main_dir}/app-{discord_version}/modules/discord_overlay2-1/discord_overlay2/"
    shutil.move("custom_script_loader.js", f"{discord_deep_dir}custom-script-loader.js")

    inject_line_into_index_file(discord_deep_dir)
    
    print("Done main script!")
    add_test_scripts = input("Would you like to add the test script?\n\tCode Blocks: Random fun little script to show the language used for a code block and add line numbers\n(y/n): ")
    
    if add_test_scripts.lower() == "y":
        get_test_scripts(custom_scrips_folder_location)
        
    print(f"Completed!\nRestart discord and the scripts in the custom scripts folder will be loaded into discord.\nYou can add custom scripts in the custom scripts folder.\n\t{custom_scrips_folder_location}")

def get_version(main_dir):
    for folder in os.listdir(main_dir):
        if "app-" in folder:
            return folder.replace("app-","")
        
def get_custom_script_loader():
    data = requests.get("https://raw.githubusercontent.com/DylanMcBean/DiscordScripts/main/custom-script-loader.js")
    return data.text.strip()

def inject_line_into_index_file(dir):
    output_file = f"{dir}index_o.js";
    with open(f"{dir}index.js") as infile, open(output_file, "w") as outfile:
        for line in infile:
            if "./custom-script-loader.js" not in line:
                outfile.write(line)
            if "const Overlay = require" in line:
                outfile.write("require('./custom-script-loader.js');\n")
    os.remove(f"{dir}index.js")
    os.rename(output_file, f"{dir}index.js")
    
def get_test_scripts(dir):
    with open(f"{dir}code_blocks.js", "w") as f:
        f.write(requests.get("https://raw.githubusercontent.com/DylanMcBean/DiscordScripts/main/code_block_lang_display.js").text.replace("\n", ""))

if __name__ == "__main__":
    main()
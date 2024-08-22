import json

def main(data, output):
    # 读取txt文件
    with open(data, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # 按行生成JSON键值对
    json_data = {}
    for i, line in enumerate(lines):
        key = f"{i+1}"  # 生成键名，可以根据需要调整
        value = line.strip()  # 去掉行末的换行符
        json_data[key] = value

    # 将JSON对象保存到文件
    with open(output, 'w', encoding='utf-8') as json_file:
        json.dump(json_data, json_file, ensure_ascii=False, indent=4)


data = input("input data: \n")
output = input("output file name: \n")
output = f"{output}.json"
main(data,output)
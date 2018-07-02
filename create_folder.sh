PROJECT_ROOT=~/projecteuler
cd ${PROJECT_ROOT}
last_dir=$(ls -d 0* | sort | tail -1)

if [ ! -z "${last_dir}" ]; then
    new_dir_num=$(expr ${last_dir} + 1)
    new_dir=$(printf "%04i" ${new_dir_num})

    NEW_DIR_PATH="${PROJECT_ROOT}/${new_dir}"

    if [ ! -d "${NEW_DIR_PATH}" ]; then
        echo "Creating problem directory [${NEW_DIR_PATH}]"
        mkdir ${NEW_DIR_PATH}
    fi

    for file in index.html scripts.js; do
        if [ ! -f ${NEW_DIR_PATH}/${file} ]; then
            echo "Creating file ${NEW_DIR_PATH}/${file}"

            TEMPLATE_FILE=${PROJECT_ROOT}/template_${file}
            if [ -f "${TEMPLATE_FILE}" ]; then
                echo "Template found [${TEMPLATE_FILE}] ... copying to [${NEW_DIR_PATH}/${file}]"
                sed "s/%QUESTION%/${new_dir}/" ${TEMPLATE_FILE} >${NEW_DIR_PATH}/${file}
            else
                echo "No template found ... creating an empty file [${NEW_DIR_PATH}/${file}]"
                touch ${NEW_DIR_PATH}/${file}
            fi
        fi
    done
fi

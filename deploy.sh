#!/bin/bash

CLIENT_DIR="client"
ATTIRE_DIR="server/Attire"
AUTH_DIR="server/Auth"
SERVER_IP="84.201.150.249"
HELM_COMMAND="helm upgrade attire attire-k8s --values attire-k8s/values.yaml"

bash client/deploy-client.sh "${CLIENT_DIR}" &
bash server/Attire/deploy-attire.sh "${ATTIRE_DIR}" &
bash server/Auth/deploy-auth.sh "${AUTH_DIR}" &

wait

echo -e "\e[32mAll scripts have finished running.\e[0m"

echo -e "\e[32mConnecting to the server to run helm upgrade...\e[0m"
ssh yegor@"${SERVER_IP}" "${HELM_COMMAND}"

if [ $? -eq 0 ]; then
    echo -e "\e[32mHelm upgrade completed successfully.\e[0m"
else
    echo -e "\e[31mHelm upgrade failed.\e[0m"
fi
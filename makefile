node:
	docker exec -it menumkr-node bash

check:
	docker exec menumkr-node npm run lint:check
	docker exec menumkr-node npm run format:check

fix:
	docker exec menumkr-node npm run lint:fix
	docker exec menumkr-node npm run format:fix
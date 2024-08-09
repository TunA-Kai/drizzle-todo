CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(255) NOT NULL,
	`age` integer NOT NULL,
	`email` text(255) NOT NULL,
	`userRole` text DEFAULT 'BASIC' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
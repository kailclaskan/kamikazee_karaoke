\echo "Delete and recreate Kamikazee Karaoke Database?"
\prompt "Return for yes or ctrl-c to cancel > " foo

DROP DATABASE kamikazee_karaoke;
CREATE DATABASE kamikazee_karaoke;
\connect kamikazee_karaoke;

\i kamikazee_karaoke.schema.sql

\echo "Delete and Recreate Kamikazee Karaoke Test Database?"
\prompt "Return for yes or ctrl-c to cancel > " foo

DROP DATABASE kamikazee_karaoke_test;
CREATE DATABASE kamikazee_karaoke_test;
\connect kamikazee_karaoke_test;

\i kamikazee_karaoke.schema.sql
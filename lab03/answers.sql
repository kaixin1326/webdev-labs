-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id,first_name,last_name 
FROM users 
ORDER BY last_name


-- Exercise 4
SELECT id,image_url,user_id 
FROM posts 
WHERE user_id = 26


-- Exercise 5
SELECT id,image_url,user_id 
FROM posts 
WHERE user_id = 26 or user_id = 12


-- Exercise 6
Select count(*) as count 
From posts


-- Exercise 7
Select user_id, count(text) as count
FROM comments
GROUP BY user_id
ORDER BY count desc



-- Exercise 8
SELECT p.id, p.image_url, p.user_id, u.username,u.first_name, u.last_name
FROM posts p 
INNER JOIN users u
ON p.user_id = u.id
Where p.user_id = 26 or p.user_id = 12



-- Exercise 9
SELECT p.id,p.pub_date,f.following_id 
FROM posts p
INNER JOIN(
    SELECT following_id 
    FROM following
    WHERE user_id = 26
    ) f
ON p.user_id = f.following_id



-- Exercise 10
SELECT p.id,p.pub_date,f.following_id, u.username
FROM posts p
INNER JOIN(
    SELECT following_id 
    FROM following
    WHERE user_id = 26
    ) f
ON p.user_id = f.following_id
INNER JOIN users u
ON u.id = p.user_id
ORDER BY p.pub_date desc

-- Exercise 11
INSERT INTO bookmarks(user_id,post_id)
VALUES(26,219)(26,220),(26,221);



-- Exercise 12
Delete FROM bookmarks
WHERE user_id = 26 and post_id between 219 and 221



-- Exercise 13
UPDATE users
SET email = 'cyoung2022@gmail.com'
WHERE id = 26


-- Exercise 14
SELECT p.id, p.user_id,count(c.text), p.caption
FROM posts p
INNER JOIN comments c
ON p.id = c.post_id
WHERE p.user_id = 26
GROUP BY p.id
ORDER BY count desc
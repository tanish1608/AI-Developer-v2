import  as crypto from 'crypto';

export class Encrypter {
public async encrypt(value: string): Promise<string> {
const salt = crypto.randomBytes(32);
const key = crypto.pbkdf2Sync(value, salt, 100000, 32, 'sha512');
return salt.toString('hex') + ':' + key.toString('hex');
}

public async decrypt(encrypted: string): Promise<string> {
const [salt, hash] = encrypted.split(':');
const key = crypto.pbkdf2Sync(hash, crypto.createHash('sha512').update(salt!).digest(), 100000, 32, 'sha512');
return key.toString('utf-8');
}

public async compare(value: string, encrypted: string): Promise<boolean> {
return await bcrypt.compareSync(encrypted, value);
}
}